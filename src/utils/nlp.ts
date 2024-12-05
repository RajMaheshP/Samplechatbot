import nlp from 'compromise';

export const analyzeIntent = (text: string) => {
  const doc = nlp(text);
  
  // Basic intent analysis
  const isQuestion = doc.questions().length > 0;
  const isGreeting = doc.match('(hello|hi|hey|greetings)').length > 0;
  const isGoodbye = doc.match('(bye|goodbye|see you|farewell)').length > 0;

  if (isGreeting) return 'greeting';
  if (isGoodbye) return 'goodbye';
  if (isQuestion) return 'question';
  return 'statement';
};

export const generateResponse = (text: string): string => {
  const intent = analyzeIntent(text);
  
  switch (intent) {
    case 'greeting':
      return 'Hello! How can I help you today?';
    case 'goodbye':
      return 'Goodbye! Have a great day!';
    case 'question':
      return "That's an interesting question. Let me help you with that.";
    default:
      return "I understand. Please tell me more about that.";
  }
};