import React, { useState, createContext } from "react";
interface Ifriends{
  isfriend:boolean;
  username:string;
}
interface ContactContextType {
  friends:Ifriends[];
 
  addFriend: () => void;
  showFriendDetail: (username: string) => void;
  showFriendContext: (username: string) => void;
}

export const ContactContext = createContext<ContactContextType>({
  friends: [],
  addFriend: () => {},
  showFriendDetail: () => {},
  showFriendContext: () => {},
});

interface ContactProviderProps {
  children: React.ReactNode;
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [friends, setFriends] = useState<Ifriends[]>([]);

  const addFriend = () => {
    //later Update in database through APIs
    setFriends([]);
  };

  

  const showFriendDetail = (username: string) => {
    //check user exist that will be called from APIs
    if (username) {
      return <div></div>;
    }
  };

  const showFriendContext = (username: string) => {
    if (friends) {
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
      value={{ friends, addFriend, showFriendDetail, showFriendContext }}
    >
      {children}
    </ContactContext.Provider>
  );
};
