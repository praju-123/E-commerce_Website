import React, { useEffect, useState } from "react";
import axios from "axios";

export const AxiosApiCall = () => {
  const [data, setData] = useState();
  const [genderData, setGenderData] = useState();
  const [extraView, setExtraView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setLoading(false);
        console.log("data is", res.data);
        setData(res.data);
      })
      .catch((e) => {
        setLoading(true);
        console.log("error is", e);
      });
  }, []);

  const checkGender = async () => {
    console.log("CLICK !");
    const result = await axios.get("https://api.genderize.io/?name=luc");
    if (result !== null) {
      setExtraView(true);
      setGenderData(result.data);
    }

    console.log(result.data);
  };

  const makeApostRequest = () => {
    console.log("POST");

    axios
      .post(
        "https://dummyjson.com/posts/add",
        {
          title: "I am in love with someone",
          userId: 5,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("post responce", res);
      });
  };

  if (loading) return null;
  return (
    <div>
      <h1> Let's Leran about some Cat fact</h1>
      <p>
        {" "}
        <h2>Fact:-</h2> {data.fact}
      </p>
      <p>
        {" "}
        <h3>length:-</h3> {data.length}
      </p>{" "}
      <button
        onClick={() => checkGender()}
        style={{ backgroundColor: "blue", height: 50, width: "50%" }}
      >
        let see Men or women
      </button>
      <div>
        <button
          onClick={makeApostRequest}
          style={{
            backgroundColor: "white",
            height: 40,
            width: "40%",
            border: 10,
          }}
        >
          POST
        </button>
      </div>
      {extraView && (
        <div>
          <h1> the gender is {genderData.gender}</h1>
          <h2> the count is {genderData.count}</h2>
          <h3> the possibility is {genderData.probability}</h3>
        </div>
      )}
    </div>
  );
};
