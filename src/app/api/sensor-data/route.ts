import { NextResponse } from 'next/server';

// Temporary in-memory storage for sensor data
// Note: In a production environment, you would use a database (e.g., PostgreSQL, MongoDB)
let sensorStorage = {
  totalYield: 1200,
  activeDevices: {
    total: 7,
    online: 6,
    offline: 1,
  },
  sensorStatus: {
    active: 6,
    total: 7,
  },
  timestamp: new Date().toISOString(),
  ultrasonicData: Array.from({ length: 10 }, (_, i) => ({
    time: i * 2,
    distance: 25 + Math.random() * 10,
  })),
  massData: Array.from({ length: 10 }, (_, i) => ({
    time: i * 4,
    weight: (i + 1) * 100000 + Math.random() * 50000,
  })),
};

export async function GET() {
  return NextResponse.json(sensorStorage);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Update the in-memory storage with the incoming data
    // Assuming the Raspberry Pi sends { ultrasonicData: [...], massData: [...] } or individual readings
    // Here we update the main storage object
    sensorStorage = {
      ...sensorStorage,
      ...data,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({ message: 'Data received successfully', status: 'success' }, { status: 201 });
  } catch (error) {
    console.error('Error receiving sensor data:', error);
    return NextResponse.json({ error: 'Failed to process sensor data' }, { status: 500 });
  }
}
