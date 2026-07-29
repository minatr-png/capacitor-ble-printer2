import { registerPlugin } from '@capacitor/core';

import type { ZPLConverterPlugin } from './definitions';

const ZPLPrinter = registerPlugin<ZPLConverterPlugin>('ZPLPrinter');

export * from './definitions';
export { ZPLPrinter };
