export default function RightColumn() {
  return (
    <div
      className="fixed top-0 h-[113vh] w-[375px] z-40 pointer-events-none"
      style={{
        right: '-108px',
        opacity: 1,
      }}
    >
      <img
        src="/images/column.png"
        alt="Decorative Column"
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}
