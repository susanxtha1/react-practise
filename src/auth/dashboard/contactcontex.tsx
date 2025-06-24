import React, { useState, createContext } from "react";

interface ContactContextType {
  isFriend: boolean;
  addFriend: () => void;
  showFriendDetail: (username: string) => void;
  showFriendContext: (username: string) => void;
}

export const ContactContext = createContext<ContactContextType>({
  isFriend: false,
  addFriend: () => {},
  showFriendDetail: () => {},
  showFriendContext: () => {},
});

interface ContactProviderProps {
  children: React.ReactNode;
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [isFriend, setIsfriend] = useState<boolean>(false);

  const addFriend = () => {
    //later Update in database through APIs
    setIsfriend(true);
  };

  

  const showFriendDetail = (username: string) => {
    //check user exist that will be called from APIs
    if (username) {
      return <div></div>;
    }
  };

  const showFriendContext = (username: string) => {
    if (isFriend) {
      //content can be accesed
      console.log("you can see the content");
      //later logic and APIs will be integrated
      return <div>{username} data will be added</div>;
    } else {
      console.log("you cannot see the content");
      return (
        <div>
          <p>Your are not added to the friend</p>
        </div>
      );
    }
  };

  return (
    <ContactContext.Provider
      value={{ isFriend, addFriend, showFriendDetail, showFriendContext }}
    >
      {children}
    </ContactContext.Provider>
  );
};
