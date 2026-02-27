const Marquee = ({ text = "Design · Creativity · Innovation · Excellence" }) => {
  // Duplicate text for seamless loop
  const repeatedText = `${text} · `.repeat(20);

  return (
    <div className="overflow-hidden bg-accent py-6 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-white font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
