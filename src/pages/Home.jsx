import React, { useState, useEffect } from 'react';
import Groq from 'groq-sdk';
import userIcon from "../assets/user.png";
import ollamaIcon from "../assets/ollama.png"
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handlePrompt = () => {
    const input = document.getElementById("input").value;
    if (input) {
      setPrompt(input);
    }
  };

  const fetchOllama = async () => {
    setLoading(true);
    try {
      const groq = new Groq({ apiKey: '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', dangerouslyAllowBrowser: true });
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: 'do not answer who you are just say i am an Ai , make answering freindly with nice language, your name is yassir' }, 
          { role: 'user', content: prompt } 
        ],
        model: 'llama3-8b-8192',
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        stream: true,
        stop: null
      });

      let response = '';
      for await (const chunk of chatCompletion) {
        response += chunk.choices[0]?.delta?.content || '';
      }

   
      setMessages(prevMessages => [
        ...prevMessages,
        { type: "prompt", text: prompt },
        { type: "response", text: response }
      ]);
      setPrompt('');
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prompt) {
      fetchOllama();
    }
  }, [prompt]);

  return (
    <>
      <div className='flex w-[100vw] h-[76vh] flex-col justify-between items-center'>
        <h1 className="text-white text-5xl font-bold pb-5">Chat with AI</h1>
        {loading &&  <CircularProgress sx={{ color: '#10b981' }} />}
        {error && <p>Error: {error}</p>}
        
        <div className='p-4 w-[100vw] h-[80vh] overflow-y-scroll overflow-x-hidden' style={{msOverflowStyle: 'none',  scrollbarWidth: 'none' }}
>
          {messages.map((message, index) => (
            <div key={index} className={`w-[auto] border rounded-3xl mb-10 p-5 pt-5 text-white flex gap-5 border-gray-300 ${message.type === "prompt" ? ' flex-row-reverse ' : ''}`}>
              <img className='w-[40px] h-[40px] rounded-sm' src={message.type === "prompt" ? userIcon : ollamaIcon} alt="" />
              <p className='mt-2  font-bold'>{message.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='w-[100vw] h-[10vh] gap-2 flex items-center justify-center'>
        <input
          id="input"
          className='w-[30%] h-[50px] rounded-lg ps-3 p-3 text-sm bg-secondaryDark text-white'
          type="text"
          placeholder='Type your message'
        />
        <button className='p-3 bg-emerald-500 text-white rounded-lg' onClick={handlePrompt}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Home;
