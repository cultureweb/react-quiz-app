import React, { useState, useEffect } from "react";
import "../App.css";
import Start from "../components/Start";
import Question from "../components/Question";
import End from "../components/End";
import Modal from "../components/Modal";
import quizData from "../data/quiz.json";
import { NavLink } from "react-router-dom";

let interval;
const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="container">
      {/* <div className="tile is-ancestor">
        <div class="tile is-parent is-8">
          <article className="tile is-child box"> */}
      <div class="columns">
        <div className="column is-three-quarters">
          <div className=" white z-depth-0 ">
            <span id="breadcrumbs">
              <span>
                <span>
                  <NavLink to="/listening/">Listening</NavLink> »{" "}
                  <span>
                    <NavLink to="/listening/">B1 Listening Tests</NavLink> »{" "}
                    <span className="breadcrumb_last" aria-current="page">
                      {quizData.data[0].title}
                    </span>
                  </span>
                </span>
              </span>{" "}
            </span>
          </div>
          <h1 className="title">{quizData.data[0].title}</h1>
          <div className="videoWrapper">
            <iframe
              title="Is this the safest place in the world?"
              width="560"
              height="315"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
              src={quizData.data[0].url}
              // src="https://test-english.com/staging03/wp-content/plugins/wp-fastest-cache-premium/pro/templates/youtube.html#0aqiPyTJv8E"
            ></iframe>
          </div>
          {step === 1 && <Start onQuizStart={quizStartHandler} />}
          {step === 2 && (
            <Question
              data={quizData.data[activeQuestion]}
              onAnswerUpdate={setAnswers}
              numberOfQuestions={quizData.data.length}
              activeQuestion={activeQuestion}
              onSetActiveQuestion={setActiveQuestion}
              onSetStep={setStep}
            />
          )}
          {step === 3 && (
            <End
              results={answers}
              data={quizData.data}
              onReset={resetClickHandler}
              onAnswersCheck={() => setShowModal(true)}
              time={time}
            />
          )}
          {showModal && (
            <Modal
              onClose={() => setShowModal(false)}
              results={answers}
              data={quizData.data}
            />
          )}
          {/* </article>
        </div>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <p class="title">Side column</p>
          <p class="subtitle">With some content</p>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </article>
      </div> */}
        </div>
        <div id="sidebar">
          <article className="tile is-child box">
            <p className="title">Side column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
