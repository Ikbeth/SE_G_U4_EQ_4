#define trigPin 13
#define echoPin 12
#define ledr 6
#define ledv 7
#define alarm 4

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  digitalWrite(trigPin, LOW);
  pinMode(ledr, OUTPUT);
  pinMode(ledv, OUTPUT);
}


void loop() {
  long time; //tiempo en ida y regreso de señal
  float distance; // distancia en cm

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  time = pulseIn(echoPin, HIGH);
  distance = time / 59;

  digitalWrite(ledv, HIGH);
  digitalWrite(ledr, LOW);
  noTone(alarm);
  String sound = "0";


  if (distance < 50) {
    digitalWrite(ledv, LOW);
    digitalWrite(ledr, HIGH);
    tone(alarm, 600);
    sound = "1";
  }

  int verde = digitalRead(ledv);
  int rojo = digitalRead(ledr);

  // Distancia/LEDverde/LEDrojo/Buzzer
  Serial.println("#" + String(distance) + "/" + String(verde) + "/" + String(rojo) + "/" + sound + "#");

  delay(1000);
}
