interface Props {
  fill: string;
}

export const MultiDots: React.FC<Props> = ({ fill }) => {
  return (
    <>
      <div className="inline-grid grid-cols-5 gap-x-1 gap-y-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            className="flex h-2 w-2 rounded-full"
            style={{ backgroundColor: fill }}
            key={`dot-${i}`}
          ></div>
        ))}
      </div>
    </>
  );
};
