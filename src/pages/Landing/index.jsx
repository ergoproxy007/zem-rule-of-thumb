import LandingContainer from 'pages/Landing/containers/LandingContainer';
import { RuleProvider } from 'context/RuleContext';

export const LandingPage = () => {
    return (
      <RuleProvider>
        <LandingContainer />  
      </RuleProvider>
    );
}
