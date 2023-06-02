import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Instructions = ({ setIsActive  }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function onCheck(e) {
    const checked = e.target.checked;
    if (checked) {
      setIsDisabled(true);
    }
    if (!checked) {
      setIsDisabled(false);
    }
  }

  const NextButtonActive = () => {
    setIsActive(true);
  };

  return (
    <>

        <div className="w-full  h-28 grid grid-cols-4 gap-x-3 py-2 px-4 mt-12">
      <div className=" col-span-4 md:col-span-3 ">
        <h2 className="py-2 px-4 font-semibold text-[20px]">
          General Instructions
        </h2>
        <p className="py-1 px-4  font-semibold text-[15px]">
          1: The clock will be set at the server. The countdown timer at the top
          right corner of screen will display the remaining time available for
          you to complete the examination. When the timer reaches zero, the
          examination will end by itself. You need not terminate the examination
          or submit your paper.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          2: The Question Palette displayed on the right side of screen will
          show the status of each question using one of the following symbols:
        </p>

        <div className="flex gap-6 py- px-4 mt-2">
          <div className="w-8 h-8 bg-gray-400  rounded"></div>
          <p className="text-[#4a4242]">
            You have not visited the question yet.
          </p>
        </div>

        <div className="flex gap-6 py-1 px-4">
          <div className="w-8 h-8 bg-black rounded"></div>
          <p className="text-[#4a4242]">You have answered the question.</p>
        </div>

        <div className="flex gap-6 py-1 px-4">
          <div className="w-8 h-8  bg-blue-600  rounded"></div>
          <p className="text-[#4a4242]">
            You have not visited the question yet.
          </p>
        </div>

        <div className="flex gap-6 py-1 px-4">
          <div className="w-8 h-8 bg-yellow-400  rounded"></div>
          <p className="text-[#4a4242]">
            You have NOT answered the question, but have marked the question for
            review.
          </p>
        </div>

        <div className="flex gap-6 py-1 px-4">
          <div className="w-8 h-8 bg-blue-400  rounded"></div>
          <p className="text-[#4a4242]">
            You have answered the question also marked it for review.
          </p>
        </div>

        <p className="py-1 px-4 font-semibold  text-[#565151] text-[15px]">
          The <span className="bold text-[black]"> Mark For Review</span> status
          for a question simply indicates that you would like to look at that
          question again. If a question is answered but marked for review, then
          the answer will be considered for evaluation unless the status is
          modified by the candidate.
        </p>

        <p className="py-2 px-4 font-semibold text-[16px]">
          Navigating to a Question :
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          3: To answer a question, do the following:
        </p>

        <p className="py-0 px-6 font-semibold  text-[#565151] text-[15px]">
          A: Click on the question number in the Question Palette at the right
          of your screen to go to that numbered question directly. Note that
          using this option does NOT save your answer to the current question.
        </p>

        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          B: Click on Next to save your answer for the current question and then
          go to the next question.
        </p>

        <p className="py-2 px-6 font-semibold  text-[#565151] text-[15px]">
          Note : that your answer for the current question will not be saved if
          you navigate to another question directly by clicking on a question
          number without saving the answer to the previous question.
        </p>

        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          You can view all the questions by clicking on the Question Paper
          button.
        </p>

        <p className="py-2 px-4 font-semibold text-[16px]">
          Answering a Question :
        </p>
        <p className="py-1 px-4  font-semibold text-[15px]">
          4: Procedure for answering a multiple choice (MCQ) type question:
        </p>
        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          A: Choose one answer from the options given below the question, click
          on the option to select that option.
        </p>
        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          B: To deselect your chosen answer, click on the bubble of the chosen
          option again.
        </p>
        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          C: To change your chosen answer, click on the bubble of another
          option.
        </p>
        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          D: To save your answer, you MUST click on the Next.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          5: Procedure for answering a numerical answer type question :
        </p>

        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          A: To enter a number as your answer, use the numerical keypad.
        </p>

        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          B: A fraction (e.g. -0.3 or -.3) can be entered as an answer with or
          without “0” before the decimal point. As many as four decimal points,
          e.g. 12.5435 or 0.003 or -932.6711 or 12.82 can be entered.
        </p>

        <p className="py-1 px-6 font-semibold  text-[#565151] text-[15px]">
          C: To save your answer, you MUST click on the Next.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          6: To mark a question for review, click on the Star button in top
          right corner of the screen. If an answer is selected (for MCQ/MCAQ) or
          entered (for numerical answer type) for a question that is Marked for
          Review , that answer will be considered in the evaluation unless the
          status is modified by the candidate.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          7: To change your answer to a question that has already been answered,
          first select that question for answering and then follow the procedure
          for answering that type of question.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          8: Note that ONLY Questions for which answers are saved or marked for
          review after answering will be considered for evaluation.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          9: Sections in this question paper are displayed on the top bar of the
          screen. Questions in a Section can be viewed by clicking on the button
          in lower right corner. The Section you are currently viewing
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          {" "}
          10: After clicking the Next button for the last question in a Section,
          you will automatically be taken to the first question of the next
          section in sequence.
        </p>

        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-[80%] text-sm text-left text-gray-500 dark:text-gray-400 mx-auto mt-4">
            <thead className="text-xs text-white uppercase bg-blue-500  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SI No.1
                </th>

                <th scope="col" className="px-6 py-3">
                  Section Name
                </th>
                <th scope="col" className="px-6 py-3">
                  No. of Question
                </th>
                <th scope="col" className="px-6 py-3">
                  Maximum Marks
                </th>
                <th scope="col" className="px-6 py-3">
                  Negative Marks
                </th>
                <th scope="col" className="px-6 py-3">
                  Positive Marks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">100</td>
                <td className="px-6 py-4">0.66</td>

                <td className="px-6 py-4">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="py-1 px-4  font-semibold text-[15px]">
          1. A total of 60 minutes is allotted for the examination.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          2.The server will set your clock for you. In the top right corner of
          your screen, a countdown timer will display the remaining time for you
          to complete the exam. Once the timer reaches zero, the examination
          will end automatically. The paper need not be submitted when your
          timer reaches zero.
        </p>

        <p className="py-1 px-4  font-semibold text-[15px]">
          3. There will, however, be sectional timing for this exam. You will
          have to complete each section within the specified time limit. Before
          moving on to the next section, you must complete the current one
          within the time limits.
        </p>

        <div className="flex items-center  mt-10">
          <input
            className="scale-[1.2] ml-6"
            type="checkbox"
            onChange={onCheck}
          />

          <label className="py-1 px-4  font-normal leading-1 text-[15px]">
            I have read all the instructions carefully and have understood them.
            I agree not to chat or use unfair means in examinations. I
            understood that using unfair means of any sort for my own or someone
            else’s advantage will lead to my immediate disqualification. The
            decision of Prepp.in will be final in these matters & cannot be
            appealed.
          </label>
        </div>

        <div className="justify-center  flex gap-5 py-2 px-4 ml-10 ">
          <button className="border  w-36 px-2 py-2 rounded hover:bg-amber-300 bg-amber-400">
            Back to test
          </button>
          <button
            disabled={!isDisabled}
            onClick={NextButtonActive}
            className="border w-36 px-6 py-2 rounded  hover:bg-amber-300 bg-amber-400"
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-full  h-28 hidden md:block ">
        <Sidebar />
      </div>
    </div>
    </>

  );
};

export default Instructions;
