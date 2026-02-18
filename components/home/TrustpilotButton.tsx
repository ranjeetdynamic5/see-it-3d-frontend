const TrustpilotButton = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md py-6 flex justify-center">
          <a
            href="https://uk.trustpilot.com/review/see-it-3d.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
                       border border-green-500 text-green-600
                       px-6 py-3 rounded-md font-medium
                       hover:bg-green-50 transition"
          >
            Review us on
            <span className="font-semibold">Trustpilot</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#00b67a"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.9 6.5L22 9.2l-5 4.7L18.3 21 12 17.3 5.7 21 7 13.9 2 9.2l7.1-0.7L12 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrustpilotButton

