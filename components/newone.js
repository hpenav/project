const noflo = require('noflo');

exports.getComponent = () => {
  const c = new noflo.Component();
  c.description = 'newone';
  c.icon = 'address-book-o';
  c.inPorts.add('in', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.outPorts.add('out', {
    datatype: 'all'
  });
  c.process((input, output) => {
    // Check preconditions on input data
    if (!input.hasData('in')) {
      return;
    }
    // Read packets we need to process
    const data = input.getData('in');
    // Process data and send output
    output.send({
      console.log(data);
      out: data
    });
    // Deactivate
    output.done();
  });
  return c;
};
