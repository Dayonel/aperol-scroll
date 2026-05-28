import { TransformStream } from 'node:stream/web';

global.TransformStream = TransformStream as typeof global.TransformStream;
