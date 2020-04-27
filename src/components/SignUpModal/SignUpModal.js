import React from 'react';

import Modal from '../Modal/Modal';

import { Button, Input, Spacing, TextEl } from './components';

const SignUpModal = (props) => (
  <Modal className="modal__sign-up" {...props}>
    <form>
      <Spacing type="mb" size={5} />

      <TextEl as="h1" align="center" size="larger" weight="medium">
        Sign up for early access
      </TextEl>

      <Spacing type="mb" size={20} />

      <TextEl
        as="p"
        align="center"
        size="md"
        weight="regular"
        className="modal__sub-title"
      >
        Access to Test is limited. To get early access, sign up with your email.
      </TextEl>

      <Spacing type="mb" size={35} />

      <Input type="email" placeholder="Email Address" required fullWidth />

      <Spacing type="mb" size={20} />

      <TextEl as="p" color="gray-dark" size="sm" weight="regular">
        By signing up for the early access waitlist, you agree to our{' '}
        <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
      </TextEl>

      <Spacing type="mb" size={20} />

      <Button type="submit" fullWidth>
        Sign Up
      </Button>
    </form>
  </Modal>
);

export default SignUpModal;
