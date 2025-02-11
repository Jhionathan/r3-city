// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Seção de links úteis */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400 transition duration-300">Sobre</a>
            <a href="#" className="hover:text-gray-400 transition duration-300">Contato</a>
            <a href="#" className="hover:text-gray-400 transition duration-300">Política de Privacidade</a>
          </div>
  
          {/* Seção de ícones de redes sociais */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
  
          {/* Direitos autorais */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;