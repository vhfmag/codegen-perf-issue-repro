import gql from "graphql-tag";

const Q1 = gql`
  query Q1 {
    user(id: 1) {
      ...A
    }
  }
`;
const Q2 = gql`
  query Q2 {
    user(id: 2) {
      ...A
    }
  }
`;
const Q3 = gql`
  query Q3 {
    user(id: 3) {
      ...A
    }
  }
`;
const Q4 = gql`
  query Q4 {
    user(id: 4) {
      ...A
    }
  }
`;
