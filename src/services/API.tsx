import axios from "axios";

const API_URL = "https://233evl980e.execute-api.ap-southeast-1.amazonaws.com";

interface LoginResponse {
    accessToken: string;
}

// login
export const loginApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, {
    email,
    password,
  });
  console.log("sussceful", response);
  return response.data;
};

//get the chat list
export interface ChatItem {
  chatroomId: string;
  name: string;
  userMobileNumber:string;
  lastMessage: string;
  lastActivity: string;
}

// Define the type for the API response
export interface ChatListResponse {
  chats: ChatItem[];
  totalPages: number;
  currentPage: number;
}

export const fetchChatListApi = async (
  limit: number,
  page: number
): Promise<ChatListResponse> => {
  const response = await axios.get<ChatListResponse>(
    `${API_URL}/chat/668e5ae5e887a65ae9ff95d0?limit=${limit}&page=${page}`
  );
  console.log("Chat list fetched successfully", response);
  return response.data;
};

//get the message list
export interface MessageItem {
  messageId: string;
  sender: string;
  body: string;
  timestamp: string;
}

export interface MessageListResponse {
  messages: MessageItem[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalMessagesCount: number;
}

export const fetchMessageListApi = async (
  chatroomId: string,
  limit: number,
  page: number
): Promise<MessageListResponse> => {
  const response = await axios.get<MessageListResponse>(
    `${API_URL}/message/${chatroomId}?limit=${limit}&page=${page}`
  );
  console.log("Message list fetched successfully", response);
  console.log("Message list fetched successfully", response.data.totalMessagesCount);
  return response.data;
};