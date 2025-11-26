import json
import random
from datetime import datetime, timedelta

stations = [
    {"id": "TROLL", "name": "Troll Station", "lat": -72.01, "lon": 2.53, "elevation": 1270},
    {"id": "TOR", "name": "Tor Research Station", "lat": -71.88, "lon": 2.56, "elevation": 1275},
    {"id": "AURORA", "name": "Aurora Observatory", "lat": -72.10, "lon": 2.40, "elevation": 1300},
]

def generate_sample_data():
    start = datetime(2025, 1, 1)
    data = []
    for i in range(100):
        ts = start + timedelta(hours=i)
        data.append({
            "timestamp": ts.isoformat(),
            "temperature": round(-25 + 10 * random.random(), 2),
            "wind_speed": round(5 + 15 * random.random(), 1)
        })
    return data

if __name__ == "__main__":
    with open("../data/stations.json", "w") as f:
        json.dump(stations, f, indent=2)
    with open("../backend/data/stations.json", "w") as f:
        json.dump(stations, f, indent=2)

    sample = generate_sample_data()
    with open("../data/sample_data.csv", "w") as f:
        f.write("timestamp,temperature,wind_speed\\n")
        for d in sample:
            f.write(f"{d['timestamp']},{d['temperature']},{d['wind_speed']}\\n")

    print("✅ Generated stations.json and sample_data.csv")
