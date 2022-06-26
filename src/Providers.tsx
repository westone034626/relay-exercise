import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import Environment from './relay/Environment';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};

export default Providers;
