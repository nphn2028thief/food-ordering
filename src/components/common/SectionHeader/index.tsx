const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-primary font-bold text-4xl italic capitalize">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
