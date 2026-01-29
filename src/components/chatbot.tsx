import {useState, useRef, useEffect} from 'react';
import {X} from 'lucide-react';

const from = 'Pauline';
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {from: from, text: "Hi! I'm Pauline, welcome to Smart Codes!"},
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [messages, open]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, {from: 'user', text: input}]);
    // Simulate bot reply
    setTimeout(() => {
      setMessages((msgs) => {
        if (msgs.length <= 2) {
          return [
            ...msgs,
            {from: from, text: 'Great! How can I assist you today?'},
          ];
        } else {
          return [
            ...msgs,
            {
              from: from,
              text: "Thanks for your message! Please provide your name, email and phone number. We'll reach out to you shortly.",
            },
          ];
        }
      });
    }, 500);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className='fixed bottom-8 right-8 z-50 bg-accent text-black rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl font-bold hover:scale-110 transition-transform cursor-pointer'
        onClick={() => setOpen((o) => !o)}
        aria-label='Open Chatbot'>
        💬
      </button>
      {/* Chat Window */}
      {open && (
        <div className='fixed bottom-28 right-8 z-50 w-80 max-w-[90vw] bg-[#181818] border border-white/10 rounded-2xl shadow-2xl flex flex-col'>
          <div className='flex items-center justify-between px-4 py-3 border-b border-white/10 bg-accent/10 rounded-t-2xl'>
            <span className='font-bold text-white'>Chat with Pauline</span>
            <X
              onClick={() => setOpen(false)}
              className='text-white text-xl'>
              &times;
            </X>
          </div>
          <div
            className='flex-1 overflow-y-auto px-4 py-2 space-y-2'
            style={{maxHeight: 320}}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex-col w-full ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                <p className='text-xs text-white/50 mb-1'>
                  {msg.from === 'user' ? 'You' : msg.from}
                </p>
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                    msg.from === 'user'
                      ? 'bg-accent text-default'
                      : 'bg-white/10 text-white'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={sendMessage}
            className='flex border-t border-white/10'>
            <input
              className='flex-1 px-3 py-2 bg-transparent text-white outline-none'
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type your message...'
              autoFocus
            />
            <button
              type='submit'
              className='px-4 text-accent font-bold disabled:opacity-50'
              disabled={!input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default Chatbot;
