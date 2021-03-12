import React, { useState, useEffect, useRef } from "react";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector(
      "input:checked"
    );
    if (findCheckedInput) {
      console.log("tst", findCheckedInput);
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    // let labelElement = e.target.parentNode;
    // console.log({ labelElement });

    // labelElement.classList.add("checked");

    setSelected(e.target.value);
    console.log(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  const indexing = (i) => {
    switch (i) {
      case 0:
        return "a.";
      case 1:
        return "b.";
      case 2:
        return "c.";
      default:
        return "x.";
    }
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <div className="question-wrapper">
                <span className="index">{indexing(i)}</span>
                <label className="radio has-background-light " key={i}>
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                  />
                  <span>{choice}</span>
                </label>
              </div>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button
            className="button is-link is-medium is-fullwidth mt-4"
            onClick={nextClickHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
