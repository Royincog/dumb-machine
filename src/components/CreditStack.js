import React from "react";
import { Link } from "react-router-dom";
function CreditStack() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-center text-xs font-semibold mb-4">
          Made with ❤️ using
        </h2>
        <div className="flex justify-center gap-2 flex-wrap">
          <Link to="https://react.dev/">
            <div className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="React Logo"
                className="h-4"
              />
            </div>
          </Link>

          <Link to="https://firebase.google.com/">
            <div className="flex items-center justify-center">
              <img
                src="data:image/png;base64,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"
                alt="Firebase Logo"
                className="h-4"
              />
            </div>
          </Link>
          <Link to="https://firecms.co/">
            <div className="flex items-center justify-center">
              <img
                src="https://firecms.co/img/logo_small.png"
                alt="Fire CMS Logo"
                className="h-4"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default CreditStack;
