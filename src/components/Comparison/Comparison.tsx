const Comparison = () => {
  return (
    // 3. Обмежуємо розмір через батьківський div
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      {/* @ts-expect-error: Web component definition is missing in JSX types */}
      <img-comparison-slider>
        {/* slot="first" ставити необов'язково, це дефолтний слот */}
        <img
          slot="first"
          src="/images/comparison/img_1-before.jpg"
          alt="До обробки"
          style={{ width: "100%", height: "auto" }}
        />

        <img
          slot="second"
          src="/images/comparison/img_1-after.jpg"
          alt="Після обробки"
          style={{ width: "100%", height: "auto" }}
        />
        {/* @ts-expect-error: Web component definition is missing in JSX types */}
      </img-comparison-slider>
    </div>
  );
};

export default Comparison;
