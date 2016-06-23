import Health from './../lib/resource/health';

export default (server) => {
  server.get('/_health', function health(req, res, next) {
    const resource = new Health();
    resource.handle(req, res, next);
  });
};
