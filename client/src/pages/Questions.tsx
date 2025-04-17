
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  category: string;
  type: string;
}

const Questions = () => {

  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { disease } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let allergy = "";
        switch (disease) {
          case "Pollen Allergy":
            allergy = "pollen";
            break;
          case "Dust Mite Allergy":
            allergy = "mite";
            break;
          case "Insect Allergy":
            allergy = "insect";
            break;
          case "Mold Allergy":
            allergy = "mold";
            break;
          default:
            allergy = "rhinitis";
        }

        const response = await axios.get(
          `http://localhost:5000/api/questions/${allergy}`
        );
        setQuestions(response.data.data);
        
        // Initialize answers with empty strings
        const initialAnswers: Record<number, string> = {};
        response.data.data.forEach((q: Question) => {
          initialAnswers[q.id] = "";
        });
        setAnswers(initialAnswers);
        
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [disease]);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
    // Here you would typically send the answers to your backend
    setSubmitted(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p>Your responses have been submitted successfully.</p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Responses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h1 className="text-2xl font-bold text-white">Questionnaire for {disease}</h1>
          <p className="text-blue-100 mt-2">
            Please answer the following questions to help us understand your condition better.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {questions.map((question, index) => (
            <div key={question.id} className="mb-8 pb-6 border-b border-gray-200 last:border-0">
              <div className="flex items-start">
                <span className="mr-3 mt-1 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full w-6 h-6 text-sm font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {question.category}
                  </p>
                  <h3 className="text-lg font-medium text-gray-900 mt-1">
                    {question.question}
                  </h3>
                  {question.type === 'scale' && (
                    <div className="mt-4">
                      <div className="flex justify-between mb-2">
                        {[1, 2, 3, 4, 5].map(num => (
                          <label key={num} className="flex flex-col items-center">
                            <span className="text-sm text-gray-600">{num}</span>
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={num}
                              checked={answers[question.id] === num.toString()}
                              onChange={() => handleAnswerChange(question.id, num.toString())}
                              className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500"
                              required
                            />
                          </label>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Mild</span>
                        <span>Severe</span>
                      </div>
                    </div>
                  )}

                  {/* Yes/No Type Question */}
                  {question.type === 'yesno' && (
                    <div className="mt-4 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="yes"
                          checked={answers[question.id] === 'yes'}
                          onChange={() => handleAnswerChange(question.id, 'yes')}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="no"
                          checked={answers[question.id] === 'no'}
                          onChange={() => handleAnswerChange(question.id, 'no')}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  )}

                  {/* Yes/No/Maybe Type Question */}
                  {question.type === 'yesnomaybe' && (
                    <div className="mt-4 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="yes"
                          checked={answers[question.id] === 'yes'}
                          onChange={() => handleAnswerChange(question.id, 'yes')}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="no"
                          checked={answers[question.id] === 'no'}
                          onChange={() => handleAnswerChange(question.id, 'no')}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="maybe"
                          checked={answers[question.id] === 'maybe'}
                          onChange={() => handleAnswerChange(question.id, 'maybe')}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Maybe</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              onClick={() => {navigate("/add_todo")}}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Submit Response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;
