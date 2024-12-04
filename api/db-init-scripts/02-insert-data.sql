INSERT INTO "Users" ("name", "email", "password", "createdAt", "updatedAt")
VALUES
    ('John Doe', 'johndoe@example.com', '$2b$10$iwGzsw8UUe7eZvr4rnNE4uXw.fSzdZ6NAWDf1F6XLuRjPaySDSRkm', NOW(), NOW()),
    ('Jane Doe', 'janedoe@example.com', '$2b$10$IZ0z6LMan8gauQCvacuRHOSOCyPurt1ihANZNhJyZVrDt8nYwrwO6', NOW(), NOW());

INSERT INTO "Workouts" ("name", "exercises", "UserId", "createdAt", "updatedAt")
VALUES
    (
        'Leg Day',
        '[{"name": "Squats", "reps": 12, "sets": 3}, {"name": "Lunges", "reps": 10, "sets": 3}]',
        1,
        NOW(),
        NOW()
    ),
    (
        'Cardio Day',
        '[{"name": "Running", "duration": "30 minutes"}, {"name": "Cycling", "duration": "20 minutes"}]',
        2,
        NOW(),
        NOW()
    );

INSERT INTO "Measurements" ("weight", "height", "UserId", "createdAt", "updatedAt")
VALUES
    (70, 175, 1, NOW(), NOW()),
    (68, 172, 2, NOW(), NOW());
