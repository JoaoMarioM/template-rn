import React, {FC} from 'react';

import {
  Title,
  Container,
  LinkDocumentation,
  LinkDocumentationTitle,
} from './styles';

export const Home: FC = () => {
  return (
    <Container>
      <Title>Template aplicativo REACT NATIVE 🚀</Title>

      <LinkDocumentation>
        <LinkDocumentationTitle>
          Segue o link para documentação
        </LinkDocumentationTitle>
      </LinkDocumentation>
    </Container>
  );
};
