
import { render, screen } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { toMatchSnapshot } from '@testing-library/jest-dom'

describe('Testing PrimeraApp component', () => {

    test('should render PrimeraApp component with nombre attribute', () => {
      const saludo = 'Hola, soy Goku';
   
      render(<PrimeraApp saludo={saludo} />);
   
      //expect(screen.getByText(saludo)).toBeInTheDocument();
    
      //test de sustitucion de enzyme
      expect(screen).toMatchSnapshot()
    });

    test('should render PrimeraApp component with subtitle', () => {

        const subtitulo = 'Soy un subtitulo';
     
        render(<PrimeraApp subtitulo={subtitulo} />);

        expect(screen).toMatchSnapshot()
      });
    

  });