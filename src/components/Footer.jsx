import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="date text-lg">
        &copy;{" "}
        <span className="text-[#46f33d] font-bold">
          <a href="https://www.facebook.com/gabolekwefarms" target="blank">
            Gabolekwe
          </a>
        </span>{" "}
        - {new Date().getFullYear()}
      </div>
      <div className="footer-links">
        {" "}
        <a href="https://www.facebook.com/gabolekwefarms" target="blank">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-facebook hover:animate-bounce"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        <a href="https://www.facebook.com/gabolekwefarms" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-box-arrow-in-up-right hover:animate-bounce"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
            />
            <path
              fill-rule="evenodd"
              d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
