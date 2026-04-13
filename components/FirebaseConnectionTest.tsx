'use client';

import { useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDocFromCache, getDocFromServer } from 'firebase/firestore';

export default function FirebaseConnectionTest() {
  useEffect(() => {
    async function testConnection() {
      try {
        // Test connection to a dummy path
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration. The client is offline.");
        }
        // Skip logging for other errors as this is just a test
      }
    }
    testConnection();
  }, []);

  return null;
}
