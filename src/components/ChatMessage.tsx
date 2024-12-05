import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from '../types/chat';
import { clsx } from 'clsx';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div
      className={clsx(
        'flex gap-3 p-4 rounded-lg',
        isBot ? 'bg-blue-50' : 'bg-gray-50'
      )}
    >
      <div className="flex-shrink-0">
        {isBot ? (
          <Bot className="w-6 h-6 text-blue-600" />
        ) : (
          <MessageCircle className="w-6 h-6 text-gray-600" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {isBot ? 'AI Assistant' : 'You'}
        </p>
        <p className="mt-1 text-sm text-gray-700">{message.content}</p>
        <p className="mt-1 text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};