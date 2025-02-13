import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 lg:px-8 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Image
              src="https://i.ibb.co/CKh9zbTB/final-logo-logo-1.png"
              alt="myAIssistant Logo"
              width={180}
              height={45}
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-sm text-gray-600">
              Automating admin tasks for real estate professionals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#features" className="hover:text-gray-900">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
              </li>
              <li>
                <Link href="#demo" className="hover:text-gray-900">Demo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">About</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} myAIssistant. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 