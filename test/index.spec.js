/* global describe, it, before */

import {expect} from 'chai';
import {Cat, Dog} from '../dist/sumor-library.js';

let lib;

describe('Given an instance of my Cat library', () => {
  before(async () => {
    lib = new Cat();
    lib.name = 'Mouse';
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Mouse');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog');
    });
  });
});
