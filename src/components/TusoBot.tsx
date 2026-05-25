import { useState, useRef, useEffect } from 'react';

type BotState = 'idle' | 'talking' | 'thinking' | 'celebrating';

export default function TusoBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Jambo! I am TusoBot, your learning companion. Let\'s learn something new today!' }
  ]);
  const [input, setInput] = useState('');
  const [botState, setBotState] = useState<BotState>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleEvent = (e: any) => {
      const { message, state, popOpen } = e.detail;
      if (popOpen) setIsOpen(true);
      setBotState(state || 'talking');
      setMessages(prev => [...prev, { sender: 'bot', text: message }]);
      
      if (state === 'celebrating') {
        setTimeout(() => setBotState('idle'), 4000);
      }
    };
    window.addEventListener('tusobot-message', handleEvent);
    return () => window.removeEventListener('tusobot-message', handleEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setBotState('thinking');

    // Simulate AI behavior workflow
    setTimeout(() => {
      setBotState('talking');
      setMessages(prev => [...prev, { sender: 'bot', text: "That's a great question! I'm currently in Phase 1 training, but soon I'll have all the CBC curriculum loaded to help you properly!" }]);
      
      setTimeout(() => setBotState('celebrating'), 2000);
      setTimeout(() => setBotState('idle'), 4000);
    }, 1500);
  };

  // State-specific animation classes mapping
  const rabbitStateClass = {
    idle: 'animate-[bounce_3s_infinite]',
    talking: 'animate-[pulse_0.5s_infinite]',
    thinking: 'animate-[pulse_1.5s_infinite] -translate-y-1',
    celebrating: 'animate-[bounce_0.5s_infinite] -translate-y-4 shadow-[0_0_30px_rgba(0,230,77,0.7)]'
  }[botState];

  const earsStateClass = {
    idle: '',
    talking: '',
    thinking: '-rotate-12',
    celebrating: 'rotate-12'
  }[botState];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 glass-card overflow-hidden shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col h-[450px] border-[rgba(0,230,77,0.3)]">
          {/* Header */}
          <div className="bg-[#0A0A0F] border-b border-[rgba(0,230,77,0.2)] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1A1A24] border border-tp-green flex items-center justify-center p-1">
                  {/* Minified mascot face */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Ears */}
                    <path d="M 30,20 Q 30,0 40,30" stroke="#00E64D" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M 70,20 Q 70,0 60,30" stroke="#00E64D" strokeWidth="6" fill="none" strokeLinecap="round" />
                    {/* Face */}
                    <circle cx="50" cy="65" r="30" fill="#fff" />
                    {/* Eyes */}
                    <circle cx="38" cy="60" r="4" fill="#00E64D" />
                    <circle cx="62" cy="60" r="4" fill="#00E64D" />
                    {/* Nose/Mouth */}
                    <path d="M 50,68 Q 50,75 45,72 M 50,68 Q 50,75 55,72" stroke="#0A0A0F" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-tp-green rounded-full border-2 border-[#0A0A0F]"></div>
              </div>
              <div>
                <h3 className="text-white font-poppins font-bold text-sm leading-tight">TusoBot</h3>
                <p className="text-[#00E64D] text-xs">AI Learning Companion</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#B0B3B8] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,230,77,0.02)]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-tp-blue text-white rounded-tr-none shadow-[0_0_10px_rgba(0,102,255,0.2)]' 
                    : 'bg-[#1A1A24] border border-[rgba(255,255,255,0.05)] text-white rounded-tl-none shadow-[0_0_10px_rgba(0,230,77,0.05)]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {botState === 'thinking' && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.05)] p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-2 h-2 bg-tp-green rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-tp-green rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-tp-green rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[rgba(255,255,255,0.05)] bg-[#0A0A0F]">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question about CBC..."
                className="flex-1 bg-[#1A1A24] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || botState === 'thinking'}
                className="w-10 h-10 rounded-full bg-tp-green flex items-center justify-center text-[#0A0A0F] hover:shadow-[0_0_15px_rgba(0,230,77,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Mascot Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group focus:outline-none"
      >
        {/* Status Bubble */}
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white text-[#0A0A0F] text-xs font-poppins font-bold px-3 py-1.5 rounded-2xl rounded-br-none shadow-lg animate-bounce whitespace-nowrap">
            Ask TusoBot!
          </div>
        )}
        
        {/* Mascot Container */}
        <div className={`w-20 h-20 bg-gradient-to-tr from-[#1A1A24] to-[#0d2a4a] rounded-full border-4 border-tp-green flex flex-col items-center justify-end overflow-hidden shadow-[0_0_20px_rgba(0,230,77,0.3)] transition-all duration-300 hover:scale-105 ${rabbitStateClass}`}>
          
          <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] mb-[-10%] translate-y-2">
            {/* Grad Cap */}
            <g transform="translate(10, -5) scale(0.6) rotate(-15 50 30)" className="origin-center">
              <path d="M 20,40 L 50,25 L 80,40 L 50,55 Z" fill="#D4A017" />
              <rect x="45" y="55" width="10" height="15" fill="#0A0A0F" />
              <path d="M 80,40 L 80,60" stroke="#00E64D" strokeWidth="3" />
              <circle cx="80" cy="62" r="3" fill="#D4A017" />
            </g>

            {/* Rabbit Ears */}
            <g className={`transition-transform duration-300 origin-[50px_60px] ${earsStateClass}`}>
              <path d="M 28,40 Q 15,-10 40,30" stroke="#00E64D" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M 72,40 Q 85,-10 60,30" stroke="#00E64D" strokeWidth="8" fill="none" strokeLinecap="round" />
            </g>
            
            {/* Rabbit Body/Face */}
            <circle cx="50" cy="75" r="35" fill="#ffffff" />
            
            {/* Eyes (Neon Green) */}
            <circle cx="35" cy="68" r="6" fill="#00E64D" className={botState === 'celebrating' ? 'scale-y-[0.2]' : ''} />
            <circle cx="65" cy="68" r="6" fill="#00E64D" className={botState === 'celebrating' ? 'scale-y-[0.2]' : ''} />
            
            {/* Nose & Mouth */}
            <circle cx="50" cy="78" r="3" fill="#ff9999" />
            <path d="M 50,81 Q 40,90 35,82" stroke="#0A0A0F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 50,81 Q 60,90 65,82" stroke="#0A0A0F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            
            {/* Star burst when celebrating */}
            {botState === 'celebrating' && (
              <g className="animate-ping text-[#D4A017]" stroke="currentColor" strokeWidth="2">
                <line x1="10" y1="50" x2="20" y2="55" />
                <line x1="90" y1="50" x2="80" y2="55" />
                <line x1="50" y1="20" x2="50" y2="30" />
              </g>
            )}
          </svg>
        </div>
      </button>
    </div>
  );
}
