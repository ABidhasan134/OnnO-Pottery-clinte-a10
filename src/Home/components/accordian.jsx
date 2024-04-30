import React from "react";

const Accordian = () => {
  return (
    <div className="grid gap-2 xl:mt-8">
      <div className="flex justify-center ">
        <div>
          <h1 className="text-3xl font-bold">Know More about Pottery</h1>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is pottery?
        </div>
        <div className="collapse-content">
          <p>
            Pottery refers to objects made of clay that are formed and then
            fired at high temperatures to create durable, ceramic items such as
            bowls, vases, plates, and sculptures. Pottery has been an essential
            part of human culture for thousands of years, serving both practical
            and artistic purposes.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What are the main techniques used in pottery?
        </div>
        <div className="collapse-content">
          <p>
            Pottery techniques vary widely depending on cultural traditions and
            individual preferences, but some common techniques include:
            Handbuilding: Forming clay by hand using techniques like pinching,
            coiling, and slab building. Wheel throwing: Creating pottery on a
            potter's wheel, where the clay is shaped and formed by spinning it
            rapidly. Glazing: Applying a liquid mixture of minerals and oxides
            to pottery before firing to create a decorative, waterproof surface.
            Firing: Heating pottery in a kiln at high temperatures to harden the
            clay and transform it into a durable ceramic material.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What role does pottery play in human history and culture?
        </div>
        <div className="collapse-content">
          <p>
            Pottery has played a significant role in human history and culture
            for millennia: Practical use: Pottery has been used for storing food
            and water, cooking, serving meals, and storing valuables. Artistic
            expression: Pottery allows artists to express themselves creatively
            through various forms, decorations, and techniques. It serves as a
            canvas for cultural motifs, religious symbols, and personal
            narratives. Trade and commerce: Pottery has been traded between
            cultures for thousands of years, serving as both utilitarian items
            and valuable commodities. Archaeological significance: Pottery
            fragments found at archaeological sites provide valuable insights
            into past civilizations, including their technological advancements,
            social structures, and artistic achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
