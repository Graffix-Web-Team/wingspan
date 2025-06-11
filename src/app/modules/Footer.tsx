import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  // Facebook,
  // Instagram,
  // Twitter,
} from "lucide-react";
import { Link } from "@/components/ui/link";

export function Footer() {
  return (
    <footer className="bg-body-text text-light-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-[250px] h-[100px]">
              <Image
                src="https://www.calstatelausu.org/_next/image?url=%2Flogos%2Fcalstatela.png&w=640&q=75"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 ml-2 leading-relaxed">
              Leadership grows here!
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.calstatelausu.org/csi"
                  className="text-gray-300 underline underline-offset-1 hover:text-white hover:no-underline transition-colors"
                >
                  Center for Student Involvement
                </Link>
              </li>
              <li>
                <Link
                  href="https://asicalstatela.org/"
                  className="text-gray-300 underline underline-offset-1 hover:text-white hover:no-underline transition-colors"
                >
                  Associated Students, Inc.
                </Link>
              </li>
              <li>
                <a
                  href="https://www.calstatela.edu/"
                  className="text-gray-300 underline underline-offset-1 hover:text-white hover:no-underline transition-colors"
                >
                  Cal State LA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">csi@calstatela.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">(323) 555-0123</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                <span className="text-gray-300">
                  5154 State University Dr.
                  <br />
                  Los Angeles, CA 90032
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Wingspan LA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
