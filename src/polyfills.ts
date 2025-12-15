import { Buffer } from "buffer";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const g = globalThis as unknown as { Buffer?: typeof Buffer };

if (!g.Buffer) {
  g.Buffer = Buffer;
}
