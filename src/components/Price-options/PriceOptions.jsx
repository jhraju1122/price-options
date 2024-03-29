import PriceOption from "../PriceOption/PriceOption";

 

const PriceOptions = () => {

    {
        "price_options"; [
          {
            "name": "Basic",
            "price": "$29.99/month",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Access to locker rooms and showers",
              "Free Wi-Fi",
              "Discounts on gym merchandise"
            ]
          },
          {
            "name": "Standard",
            "price": "$49.99/month",
            "features": [
              "All Basic features included",
              "Access to group fitness classes",
              "Access to sauna and steam room",
              "Access to indoor track",
              "Nutritional counseling sessions (limited)"
            ]
          },
          {
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
              "All Standard features included",
              "Access to personal training sessions (limited)",
              "Access to swimming pool",
              "Access to outdoor sports courts",
              "Towel service",
              "Complimentary protein shakes"
            ]
          }
        ]
      }
      

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
          PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOption;