import React, { createContext, useState, useEffect, useContext } from "react";

interface UserProfile {
  email: string;
  username: string;
  gender: string;
  isCompany: boolean;
  iat: number;
  exp: number;
}

interface UserContextType {
  user: UserProfile | null;
  error: string | null;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/perfil", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("Error fetching profile data");
      }
    };

    fetchProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, error, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
