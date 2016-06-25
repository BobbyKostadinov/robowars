import health from './../lib/resource/health';
import move from './../lib/resource/move';

export default (server) => {
  server.get('/_health', (req, res, next) => {
    health(req, res, next);
  });
  server.put('/move', (req, res, next) => {
    move(req, res, next);
  });
};
