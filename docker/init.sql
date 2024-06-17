CREATE SEQUENCE seq_visit_id START 11;

CREATE TABLE visit (
    id int8 primary key not null,
    --visit
    visit_purpose text,
    status text,
    visit_date timestamp,
    visit_description text,
    --patient
    chip_number text,
    species text,
    race text,
    pet_name text,
    birth_date timestamp,
    --owner
    name text,
    surname text,
    pesel text,
    phone_number text,
    email_address text
);

    INSERT INTO visit
(id, visit_purpose, status, visit_date, visit_description,
 chip_number, species, race, pet_name, birth_date,
 name, surname, pesel, phone_number, email_address)
    VALUES
(1, 'RTG łapy', 'URGENT', to_timestamp(1719878400), 'Radiografia lewej przedniej łapy',
    '651322252', 'pies', 'Labrador', 'Bruno', to_timestamp(1552608000),
    'Jan', 'Nowak', '00101078912', '+48123123123', 'jan.nowak@gmail.com'),

(2, 'Bronchoskopia', 'URGENT', to_timestamp(1720137600), 'Bronchoskopia podczas uśpienia',
    '565641234', 'kot', 'Siamese', 'Mia', to_timestamp(1532736000),
    'Agnieszka', 'Konrad', '98020167898', '+48123123124', 'agnieszka.konrad@gmail.com'),

(3, 'Wizyta okulistyczna', 'URGENT', to_timestamp(1720137600), 'Wizyta okulistyczna prawego oka, podejrzenie uszkodzenia siatkówki',
    '478487125', 'kanarek', 'Canary', 'Tweety', to_timestamp(1591920000),
    'Kamil', 'Waligóra', '20330143985', '+48123123125', 'kamil.waligora@gmail.com'),

(4, 'Szczepienie', 'STABLE', to_timestamp(1720310400), 'Szczepienie przeciwko wściekliźnie',
    '256489741', 'pies', 'Bulldog', 'Rex', to_timestamp(1512432000),
    'Andrzej', 'Kowalski', '78041362757', '+48123123126', 'andrzej.kowalski@gmail.com'),

(5, 'Echo serca', 'URGENT', to_timestamp(1720656000), 'Echografia serca',
    '322897777', 'kot', 'Persian', 'Bella', to_timestamp(1540080000),
    'Grażyna', 'Szynka', '95040194321', '+48123123127', 'grazyna.szynka@gmail.com'),

(6, 'Szczepienie', 'STABLE', to_timestamp(1720742400), 'Odrobaczenie',
    '984262669', 'Kawia domowa', 'Guinea Pig', 'Rosie', to_timestamp(1567036800),
    'Jan', 'Górka', '01010143984', '+48123123128', 'jan.gorka@gmail.com'),

(7, 'USG jamy brzusznej', 'STABLE', to_timestamp(1721088000), 'USG jamy brzusznej',
    '444548518', 'kot', 'Maine Coon', 'Coco', to_timestamp(1581206400),
    'Mateusz', 'Szczepaniak', '06010149372', '+48123123129', 'mateusz.szczepaniak@gmail.com'),

(8, 'RTG kręgosłupa', 'STABLE', to_timestamp(1721606400), 'Radiografia kręgosłupa',
    '515155547', 'pies', 'Chihuahua', 'Lola', to_timestamp(1618531200),
    'Miłosz', 'Firek', '10712169273', '+48123123130', 'milosz.firek@gmail.com'),

(9, 'Kastracja', 'STABLE', to_timestamp(1722470400), 'Procedura kastracji',
    '234146647', 'kot', 'Siamese', 'Kitty', to_timestamp(1606694400),
    'Anna', 'Kasprzyk', '11090948121', '+48123123131', 'anna.kasprzyk@gmail.com'),

(10, 'Szczepienie', 'STABLE', to_timestamp(1722556800), 'Szczepienie przeciwko wściekliźnie',
    '654444457', 'pies', 'Dachshund', 'Buddy', to_timestamp(1544832000),
    'Jadwiga', 'Cieślak', '81071467890', '+48123123132', 'jadwiga.cieslak@gmail.com');