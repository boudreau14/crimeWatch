create table crimes_reported (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    neighborhood VARCHAR(100) NOT NULL,
    date TEXT,
    police_called boolean,
    type VARCHAR(100) NOT NULL,
    notes VARCHAR(300)    
)
