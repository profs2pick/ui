import {expect} from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import './concatBaseUrl';

const regex = new RegExp(process.env.API);

describe('axios interceptor [concatBaseUrl]', () => {
  it('should concatenate base url', (cb) => {
    const sandbox = sinon.sandbox.create();
    const server = sandbox.useFakeServer();
    server.respondWith([200, { 'Content-Type': 'application/json' }, ""])

    axios.get('yolo')
    // 'base url `process.env.API` should be concatenated'
      .then(() => expect(regex.test(server.requests[0].url)).to.be.true)
      .then(() => cb())
      .catch((err) => console.log('an error occured; the test did not pass' + err));

    setTimeout(() => {
      server.respond();
      sandbox.restore();
    }, 0);
  });

  it('should not concatenate base url to absolute url', (cb) => {
    const sandbox = sinon.sandbox.create();
    const server = sandbox.useFakeServer();
    server.respondWith([200, { 'Content-Type': 'application/json' }, ""])

    axios.get('http://yolo-swag.com')
    // 'base url `_API_` should not be concatenated'
      .then(() => expect(regex.test(server.requests[0].url)).to.be.false)
      .then(() => cb())
      .catch((err) => console.log('an error occured; the test did not pass' + err));

    setTimeout(() => {
      server.respond();
      sandbox.restore();
    }, 0);
  });
});
