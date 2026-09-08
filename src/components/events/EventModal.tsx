'use client';

import { useEffect, useRef } from 'react';
import { CalendarDays, Clock, ExternalLink, MapPin, X } from 'lucide-react';
import Image from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import {
  formatLongDate,
  formatTimeRange,
  type WingspanEvent,
} from '@/lib/events';

type EventModalProps = {
  event: WingspanEvent | null;
  onClose: () => void;
};

export function EventModal({ event, onClose }: EventModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // `showModal()` gives Escape, the focus trap, and focus restoration to the
  // card that opened it for free. The dialog stays mounted whether or not an
  // event is selected — unmounting it would strip the browser of the element
  // it hands focus back from.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (event && !dialog.open) dialog.showModal();
    if (!event && dialog.open) dialog.close();
  }, [event]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(clickEvent) => {
        // Clicks land on the dialog itself only when they hit the backdrop.
        if (clickEvent.target === dialogRef.current) onClose();
      }}
      aria-labelledby="event-modal-title"
      className="m-auto w-[min(40rem,calc(100vw-2rem))] rounded-xl bg-white p-0 backdrop:bg-black/60"
    >
      {event && (
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="relative">
            {event.flyerUrl && (
              /*
               * Decorative, so `alt=""`. The host department, title, date,
               * time and location all print as text directly below, and the
               * feed's own `eventPhotoAltText` is no help: CampusGroups serves
               * the group's generic cover image whenever nobody uploaded a
               * real flyer, so that field reads `csi cover photo` 32 times and
               * `Cross Cultural Centers logo` 39 times across the full feed,
               * and its longer entries arrive double-escaped.
               *
               * Worth revisiting only if CSI starts publishing flyers that
               * carry information of their own — a QR code, a lineup, a dress
               * code. An empty alt drops that silently.
               */
              <Image
                src={event.flyerUrl}
                alt=""
                // `contain`, not `cover`: flyers are authored art of varying
                // aspect ratios, and cropping one silently eats whatever sits
                // near its edges.
                className="max-h-80 w-full bg-light-background object-contain"
                lazy
              />
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close event details"
              className="absolute top-3 right-3 bg-white/90 text-gray-700 hover:bg-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <div className="p-6">
            <p className="text-sm font-medium text-primary">{event.group}</p>
            <h2
              id="event-modal-title"
              className="mt-1 font-serif text-2xl font-bold text-gray-900"
            >
              {event.title}
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                {formatLongDate(event.start)}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {formatTimeRange(event.start, event.end)}
              </p>
              {event.location && (
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {event.location}
                </p>
              )}
            </div>

            {event.description && (
              /*
               * `description` is authored in CampusGroups and is HTML by
               * contract, so it is rendered as text rather than injected. If
               * markup ever does appear it shows up as visible characters,
               * which is the safe way for this to break.
               */
              <p className="mt-4 leading-relaxed whitespace-pre-line text-gray-600">
                {event.description}
              </p>
            )}

            {event.rsvpUrl && (
              <Button
                asChild
                className="mt-6 bg-primary text-white transition-colors hover:bg-[#00687a]"
              >
                <a
                  href={event.rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP on CampusGroups
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
