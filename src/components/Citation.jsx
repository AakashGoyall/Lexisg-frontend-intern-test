export default function Citation({ citation }) {
  const handleClick = () => {
    window.open(citation.link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="mt-2 text-sm text-blue-700 underline cursor-pointer"
    >
      {citation.text} (Source: {citation.source})
    </div>
  );
}
