import { useState } from "react";

const VoiceAssistant = ({ getRecommendations }) => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("User said:", transcript);
      getRecommendations(transcript);
    };

    recognition.start();
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <button 
        onClick={startListening} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {listening ? "Listening..." : "Ask for Recommendations 🎤"}
      </button>
    </div>
  );
};

export default VoiceAssistant;
