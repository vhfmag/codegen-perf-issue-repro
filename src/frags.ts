import gql from "graphql-tag";

const A = gql`
  fragment A on User {
    a
    ...B
  }
`;
const B = gql`
  fragment B on User {
    b
    ...C
  }
`;
const C = gql`
  fragment C on User {
    c
    ...D
  }
`;
const D = gql`
  fragment D on User {
    d
    ...E
  }
`;
const E = gql`
  fragment E on User {
    e
    ...F
  }
`;
const F = gql`
  fragment F on User {
    f
    ...G
  }
`;
const G = gql`
  fragment G on User {
    g
    ...H
  }
`;
const H = gql`
  fragment H on User {
    h
    ...I
  }
`;
const I = gql`
  fragment I on User {
    i
    ...J
  }
`;
const J = gql`
  fragment J on User {
    j
    ...K
  }
`;
const K = gql`
  fragment K on User {
    k
    ...L
  }
`;
const L = gql`
  fragment L on User {
    l
    id
    username
  }
`;
