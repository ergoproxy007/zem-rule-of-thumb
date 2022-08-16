import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NativeSelect from '@material-ui/core/NativeSelect';
import useWindowSize from 'hooks/useWindowSize';
import VoteCard from 'components/Vote/VoteCard';
import { Text } from 'config/TextConstants';
import { Section } from 'views/Tags/BlockLevel';
import { Paragraph } from 'views/Tags/Text';
import { XS } from 'context/helper/store.helper';

const DivFlex = styled.div`
  display: flex;
`;
const CustomDiv = styled.div`
  display: ${(props) => props.$display};
  margin-left: auto;

  @media all and (min-width: 768px) {
    padding-bottom: 10px;
  }
  @media all and (min-width: 1100px) {
    padding-top: 10px;
  }
`;
const CustomParagraph = styled(Paragraph)`
  margin: 0;

  @media all and (min-width: 1100px) {
    font-size: 2.3rem;
  }
`;

export const MainRule = ({ options, currentOption, defaultValue, handleCurrentOption }) => {
  const [seletedValue, setSeletedValue] = useState({text: currentOption});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSeletedValue({
      ...seletedValue,
      [name]: event.target.value,
    });
    handleCurrentOption(value);
  };
  const [width, height] = useWindowSize();
  const isMobile = width < XS.width;
  const display = isMobile ? 'none' : 'block';
  return (
    <main role='main'>
      <Section>
        <DivFlex>
          <CustomParagraph $fontSize='1.3rem'>{ Text.PreviousRulings }</CustomParagraph>
          <CustomDiv $display={display}>
            <NativeSelect
              value={currentOption === defaultValue ? defaultValue : seletedValue.text}
              onChange={handleChange}
              inputProps={{
                name: 'text',
                id: 'age-native-label-placeholder',
              }}>
              {
                options?.map((option, index) => (
                  <option key={index} value={option.value}>{option.text}</option>
                ))
              }
            </NativeSelect>
          </CustomDiv>
        </DivFlex>
        <VoteCard view={currentOption} isMobile={isMobile} />
      </Section>
    </main>
  );
}

MainRule.propTypes = {
  options: PropTypes.object,
  currentOption: PropTypes.string,
  defaultValue: PropTypes.string,
  handleCurrentOption: PropTypes.func
}
